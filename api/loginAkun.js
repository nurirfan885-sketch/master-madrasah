const { createClient } = require('@supabase/supabase-js');
module.exports = async (req, res) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { u, p } = JSON.parse(req.body);
  const { data, error } = await supabase.from('pengguna').select('*').eq('username', u).eq('password', p).single();
  if (error || !data) return res.status(401).json({ error: "Gagal login" });
  return res.status(200).json(data);
};
