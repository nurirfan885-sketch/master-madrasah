const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    await supabase.from('ppdb_settings').update(JSON.parse(req.body)).eq('id', 1);
    return res.status(200).json({ ok: true });
  }
  const { data } = await supabase.from('ppdb_settings').select('*').eq('id', 1).single();
  return res.status(200).json(data);
};
