const { createClient } = require('@supabase/supabase-js');
exports.handler = async () => {
  const supabase = createClient('https://lmdylqnkidbbreqqfxqm.supabase.co', 'sb_secret_Wnma0adzxT-_bxecEpebjw_HuLcHVdj');
  const { data } = await supabase.from('pengaturan').select('*').eq('id', 1).single();
  return { statusCode: 200, body: JSON.stringify(data) };
};
