const { createClient } = require('@supabase/supabase-js');
module.exports = async (req, res) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { id } = JSON.parse(req.body);
  await supabase.from('surat').delete().eq('id', id);
  return res.status(200).json({ ok: true });
};
