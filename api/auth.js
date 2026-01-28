const { createClient } = require('@supabase/supabase-js');

// Masukkan Kunci Anda di sini (Pastikan ini kunci Secret dari proyek yang sama!)
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');

module.exports = async (req, res) => {
  // Biarkan Vercel menangani berbagai cara data dikirim (Teks atau Objek)
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch (e) {
    return res.status(400).json({ error: "Format data salah" });
  }

  // LOGIKA LOGIN
  if (body.action === 'login') {
    const { data, error } = await supabase
      .from('pengguna')
      .select('*')
      .eq('username', body.u)
      .eq('password', body.p)
      .single();

    if (error || !data) {
      return res.status(401).json({ error: "Username atau Password Salah!" });
    }
    return res.status(200).json(data);
  }

  // LOGIKA UPDATE PROFIL
  if (body.action === 'update') {
    const { error } = await supabase
      .from('pengguna')
      .update({ nama_lengkap: body.nama, password: body.pass })
      .eq('id', body.id);

    if (error) return res.status(500).json(error);
    return res.status(200).json({ ok: true });
  }
};
