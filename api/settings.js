const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    await supabase.from('ppdb_settings').update(body).eq('id', 1);
    return res.status(200).json({ ok: true });
  }
  const { data } = await supabase.from('ppdb_settings').select('*').eq('id', 1).single();
  return res.status(200).json(data);
};
