const { createClient } = require('@supabase/supabase-js');
exports.handler = async (event) => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { nama, sub, logo } = JSON.parse(event.body);
  const { error } = await supabase.from('pengaturan').update({ nama_instansi: nama, sub_judul: sub, logo_url: logo }).eq('id', 1);
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
