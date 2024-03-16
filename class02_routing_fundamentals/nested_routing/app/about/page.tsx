export default function page() {
  const name: string = "Rehan";
  // && or ||
  return (
    <>
      <h1>This is our About Page</h1>
      <h3>{name == "Rehan" && "In Q2"}</h3>
      <p>
        Lorem&apos;s ipsum dolor sit amet consectetur adipisicing elit. Beatae
        officiis nisi eligendi quaerat harum nihil.
      </p>
    </>
  );
}
