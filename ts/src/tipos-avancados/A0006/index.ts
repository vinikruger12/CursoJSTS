type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: "o title",
  texto: 'the text',
}

console.log(documento.data?.toDateString() ?? "deu undefined");
