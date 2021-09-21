function Card({ children, size = 1 }) {
  return <div className={`col-span-${size} row-span-${size} overflow-auto max-h-1/2 dark:bg-gray-900 p-5 rounded-xl shadow`}>{children}</div>;
}

export default Card;
