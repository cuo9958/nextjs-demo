interface IButtonProps {
  children?: any;
  onClick?: any;
}

export default function Button(props: IButtonProps) {
  return <button onClick={props.onClick}>{props.children}</button>;
}
