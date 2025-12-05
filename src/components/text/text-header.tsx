type TextHeaderProps = {
  text: string
  color?: string
  className?: string
}

function TextHeader({text, color="text-black", className=""}: TextHeaderProps) {
  return (
    <h1
    className={`
    font-(family-name:--font-header)
    text-3xl
    md:text-5xl
    lg:text-6xl
    ${color} ${className}`}
    >
      {text}
    </h1>
  )
}

export default TextHeader;