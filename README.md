Create SSL certificate
openssl genrsa -out test-key.pem 2048

fill fields
openssl req -new -sha256 -key test-key.pem -out test-csr.pem

openssl x509 -req -in test-csr.pem -signkey test-key.pem -out  test-cert.pem