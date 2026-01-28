const { createClient } = require('@supabase/supabase-js');
module.exports = async (req, res) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { data, error } = await supabase.from('surat').select('*').order('id', { ascending: false });
  return res.status(200).json(data || []);
};
