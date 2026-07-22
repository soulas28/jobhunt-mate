export default function Header(props: { title: string }) {
  return (
    <h1 className="text-2xl text-center h-20 block py-5">{props.title}</h1>
  );
}
