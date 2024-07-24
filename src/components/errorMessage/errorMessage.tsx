interface ErrorMessageInterface {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageInterface) {
  return <span className="text-red-400 font-semibold">{message}</span>;
}
