// Import the necessary libraries and modules
const PDFDocument = require('pdfkit');
const fs = require('fs');

// Function to generate an invoice PDF
function generateInvoice(order) {
  return new Promise((resolve, reject) => {
    const invoiceName = `invoice_${order._id}.pdf`;
    const doc = new PDFDocument();

    // Pipe the PDF to a file
    const writeStream = fs.createWriteStream(invoiceName);
    doc.pipe(writeStream);

    // Add content to the PDF (customize this part according to your order data)
    doc.fontSize(18).text('Invoice', { align: 'center' });
    doc.fontSize(14).text(`Order ID: ${order._id}`);
    doc.fontSize(12).text(`Date: ${new Date().toLocaleString()}`);

    // Loop through order items and add them to the invoice
    order.orderItems.forEach((item) => {
      doc.text(`Product: ${item.name}`);
      doc.text(`Quantity: ${item.quantity}`);
      doc.text(`Price: $${item.price}`);
      doc.moveDown();
    });

    doc.text(`Total: $${order.totalPrice}`);

    // Finalize and save the PDF
    doc.end();

    // Resolve with the invoice file name
    writeStream.on('finish', () => {
      resolve(invoiceName);
    });

    writeStream.on('error', (error) => {
      reject(error);
    });
  });
}

// Example usage:
// Assuming 'order' contains the order data
generateInvoice(order)
  .then((invoiceName) => {
    console.log(`Invoice generated: ${invoiceName}`);

    // Here, you can handle the generated invoice, like sending it to the user or saving it.
    // For example, you can send it via email or provide a download link.
    // You should also remove the console.log statement in a production environment.
  })
  .catch((error) => {
    console.error('Error generating invoice:', error);
  });
