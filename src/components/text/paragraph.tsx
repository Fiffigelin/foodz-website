type ParagraphProps = {
  text: string;
  color?: string;
  className?:string;
}

function Paragraph({text, color="text-black", className=""}: ParagraphProps) {
  return <p className={`text-lg my-3 md:text-xl ${color} ${className}`}>{text}</p>
}

export default Paragraph;