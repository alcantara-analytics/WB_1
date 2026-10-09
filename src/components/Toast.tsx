import { Icon } from './Icon';

export function Toast({ message }: { message: string }) {
  if (!message) return null;
  return <div className="toast"><Icon name="check" />{message}</div>;
}
