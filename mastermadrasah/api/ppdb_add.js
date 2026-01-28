const { createClient } = require('@supabase/supabase-js');
module.exports = async (req, res) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { error } = await supabase.from('ppdb_siswa').insert([JSON.parse(req.body)]);
  if (error) return res.status(500).json(error);
  return res.status(200).json({ ok: true });
};
