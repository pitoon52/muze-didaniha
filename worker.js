export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // تست سالم بودن Worker
    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          ok: true,
          service: "muze-didaniha",
          worker: "holy-art-7c50"
        }),
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        }
      );
    }

    // نمایش فایل‌های موزه
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("موزه دیدنی‌ها آماده است.", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"