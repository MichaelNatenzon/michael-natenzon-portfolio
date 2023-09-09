export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.ON_DEMAND_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid Request" });
  }

  const pages_not_home = ["plot-generator"];

  try {
    await Promise.all(
      [...[""], ...pages_not_home].map(async (page) => {
        try {
          await res.revalidate("/" + page);
        } catch (e) {}
      })
    );

    return res
      .status(200)
      .end("Revalidated: Home, " + pages_not_home.join(", "));
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
