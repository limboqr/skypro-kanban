
function Button({ hidden, isDefault, children }) {
   return (
      // <button className={`${isDefault
      //       ? "pop-exit__exit-yes _hover01"
      //       : "pop-exit__exit-no _hover03"
      //    }`}>
      //    {children}
      // </button>
      <button style={{ display: hidden ? "none" : "block" }} className={isDefault
            ? "pop-exit__exit-yes _hover01"
            : "pop-exit__exit-no _hover03"
         }>
         {children}
      </button>
   )
}

export default Button
