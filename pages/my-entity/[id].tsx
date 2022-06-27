import PDFViewer from "../../components/PDFViewer";

const Entity: React.FC = () => {
  return (
    <>
      <PDFViewer
        file={
          "https://prome-test.s3.eu-south-1.amazonaws.com/0dc6355f-17e8-4770-ba16-d9629b9488df%40%23%40Dimensioni-Volkswagen-Golf-8.pdf.pdf"
        }
      />
    </>
  );
};

export default Entity;
