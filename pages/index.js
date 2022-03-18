export function getStaticProps() {
  return {
    props: {
      time: new Date().toLocaleTimeString(),
    },
  };
}

export default function Home({ time }) {
  function revalidate() {
    fetch("/api/revalidate");
  }
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={() => revalidate()}>Revalidar</button>
    </div>
  );
}
