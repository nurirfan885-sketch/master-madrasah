const { createClient } = require('@supabase/supabase-js');
exports.handler = async (event) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { id, nama, pass } = JSON.parse(event.body);
  const { error } = await supabase.from('pengguna').update({ nama_lengkap: nama, password: pass }).eq('id', id);
  if (error) return { statusCode: 500, body: JSON.stringify(error) };
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
