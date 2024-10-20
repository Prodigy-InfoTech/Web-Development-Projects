from flask import Flask, render_template, request, send_file
import barcode
from barcode.writer import ImageWriter
from io import BytesIO
import qrcode

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate', methods=['POST'])
def generate_barcode():
    code = request.form['code']
    barcode_type = request.form['barcode_type']
    color = request.form.get('color', 'black')  

    if barcode_type == "qrcode":
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(code)
        qr.make(fit=True)
        img = qr.make_image(fill_color=color, back_color="white")
        buffer = BytesIO()
        img.save(buffer, format="PNG")
        buffer.seek(0)
        return send_file(buffer, mimetype='image/png', as_attachment=True, download_name='qrcode.png')
    else:
        barcode_format = barcode.get_barcode_class(barcode_type)
        generated_barcode = barcode_format(code, writer=ImageWriter())
        options = {'foreground': color}
        buffer = BytesIO()
        generated_barcode.write(buffer, options=options)
        buffer.seek(0)
        
        return send_file(buffer, mimetype='image/png', as_attachment=True, download_name='barcode.png')

if __name__ == '__main__':
    app.run(debug=True)