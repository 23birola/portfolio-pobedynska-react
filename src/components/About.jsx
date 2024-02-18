export default function About(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");

  return (
    <div className={size}>
      {props.children}
    </div>
  );
}
