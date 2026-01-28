const { createClient } = require('@supabase/supabase-js');
const { Buffer } = require('buffer');
module.exports = async (req, res) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  try {
    const { fileName } = JSON.parse(req.body);
    const fileContent = JSON.parse(req.body).fileContent;
    const buffer = Buffer.from(fileContent, 'base64');
    await supabase.storage.from('ppdb_bukti').upload(fileName, buffer, { contentType: 'application/pdf', upsert: true });
    const { data: { publicUrl } } = supabase.storage.from('ppdb_bukti').getPublicUrl(fileName);
    return res.status(200).json({ publicUrl });
  } catch (e) { return res.status(500).json({ error: e.message }); }
};
