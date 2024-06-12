
function Button({ isDefault, children }) {
   return (
      <button className={`${isDefault
            ? "pop-exit__exit-yes _hover01"
            : "pop-exit__exit-no _hover03"
         }`}>
         {children}
      </button>
   )
}

export default Button
