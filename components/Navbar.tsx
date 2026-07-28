export default function Navbar() {
  return (
    <div className="navbar min-w-xs bg-primary py-20">
      <h1 className="text-center text-secondary my-5 text-3xl">Jobhunt-mate</h1>
      {[
        ["Home / Dashboard", "/"],
        ["Companies", "/companies"],
        ["TODO", "/todo"],
      ].map((e, i) => (
        <a
          className="text-secondary border-y border-secondary px-5 py-3 text-left w-full block"
          key={i}
          href={e[1]}
        >
          {e[0]}
        </a>
      ))}
    </div>
  );
}
