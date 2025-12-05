type ParagraphProps = {
  text: string;
  color?: string;
  className?:string;
}

function Paragraph({text, color="text-black", className=""}: ParagraphProps) {
  return <p className={`text-xl my-3 ${color} ${className}`}>{text}</p>
}

export default Paragraph;