const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const { data } = await supabase.from('surat').select('*').order('id', { ascending: false });
    return res.status(200).json(data || []);
  }
  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (body.action === 'delete') {
      await supabase.from('surat').delete().eq('id', body.id);
      return res.status(200).json({ ok: true });
    }
    await supabase.from('surat').insert([body]);
    return res.status(200).json({ ok: true });
  }
};
