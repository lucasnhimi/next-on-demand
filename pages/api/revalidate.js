export default async function handler(req, res) {
  let revalidate = false;
  try {
    await res.unstable_revalidate("/");
    revalidate = true;
  } catch (err) {
    console.log(err);
  }

  res.json({ revalidate });
}
