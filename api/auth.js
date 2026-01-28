const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
module.exports = async (req, res) => {
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  if (body.action === 'login') {
    const { data, error } = await supabase.from('pengguna').select('*').eq('username', body.u).eq('password', body.p).single();
    if (error || !data) return res.status(401).json({ error: "Gagal login" });
    return res.status(200).json(data);
  }
  if (body.action === 'update') {
    await supabase.from('pengguna').update({ nama_lengkap: body.nama, password: body.pass }).eq('id', body.id);
    return res.status(200).json({ ok: true });
  }
};
