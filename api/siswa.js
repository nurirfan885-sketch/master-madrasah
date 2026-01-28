const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const { data } = await supabase.from('ppdb_siswa').select('*').order('created_at', { ascending: false });
    return res.status(200).json(data || []);
  }
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    if (body.action === 'delete') {
      await supabase.from('ppdb_siswa').delete().eq('id', body.id);
      return res.status(200).json({ ok: true });
    } else {
      await supabase.from('ppdb_siswa').insert([body]);
      return res.status(200).json({ ok: true });
    }
  }
};
