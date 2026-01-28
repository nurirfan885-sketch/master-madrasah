const { createClient } = require('@supabase/supabase-js');
const { Buffer } = require('buffer');
const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
module.exports = async (req, res) => {
  try {
    const { fileName, fileType, bucket } = req.query;
    const buffer = Buffer.from(req.body, 'base64');
    await supabase.storage.from(bucket).upload(fileName, buffer, { contentType: fileType, upsert: true });
    const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(fileName);
    return res.status(200).json({ publicUrl });
  } catch (e) { return res.status(500).json({ error: e.message }); }
};
