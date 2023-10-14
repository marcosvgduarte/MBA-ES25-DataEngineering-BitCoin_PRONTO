var express = require('express');
var router = express.Router();

var textoEmail = '<div>' +
'<span style="font-size: large;">' +
'  <u>Alerta cotação Bitcoin</u>' +
'</span> ' +
'<br>' +
'</div>' +
'<div>' +
'<br>' +
'</div>' +
'Olá.' +
'<div>' +
'<br>' +
'</div>' +
'<div>' +
'<div>O valor de cotação do ' +
'  <span class="Lm ng" data-ddnwab="PR_1_0" aria-invalid="grammar">BITCOIN</span> caiu para menos de R$ 130.000,00.' +
'</div>' +
'</div>' +
'<div>' +
'<br>' +
'</div>' +
'<div>Atenciosamente.</div>' +
'<div>' +
'<br>' +
'</div>' +
'<div>' +
'<em>' +
'  <strong>Equipe ' +
'    <span class="LI ng" data-ddnwab="PR_3_0" aria-invalid="spelling">Filantroplanta</span>.' +
'  </strong>' +
'</em>' +
'</div>';


// Listar Cotacao_Bitcoin
router.get('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT * FROM Cotacao_Bitcoin", function (err, rows) {
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
    });
});

// Buscar Cotacao_Bitcoin pelo id
router.get('/:id', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var id = req.params.id;
        connection.query("SELECT * FROM Cotacao_Bitcoin WHERE id='"
            + id + "' LIMIT 1", function (err, rows) {
                if (!err && rows.length > 0) {
                    res.json(rows);
                } else {
                    res.json([]);
                }
            });
    });
});

async function obterCotacaoBitCoinDolar() {
    const retornoAsset = await fetch('https://api.coincap.io/v2/assets/bitcoin').then(response => response.json());
    this.retornoAsset = retornoAsset;

    const retornoRate = await fetch('https://api.coincap.io/v2/rates/brazilian-real').then(response => response.json());
    this.retornoRate = retornoRate;

    const retorno1 = retornoAsset.data.priceUsd;
    const retorno2 = retornoRate.data.rateUsd;

    return { usd: retorno1, brl: retorno2 };
}

// Cadastrar Cotacao_Bitcoin acima de 130.000
router.post('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        obterCotacaoBitCoinDolar().then(({ usd, brl }) => {
            var priceUsd = usd;
            var brl_rate = brl;
            var brl_value = (priceUsd / brl_rate);
            var send_email = 'N';

            if (brl_value < 140000) {
                send_email = 'S';

                const nodemailer = require('nodemailer');

                const transporter = nodemailer.createTransport({
                    host: 'smtp.office365.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: "alertabitcoincap@outlook.com",
                        pass: "Matrix1324##"
                    },
                    tls: {
                        rejectUnauthorized: false,
                    },
                });

                async function run() {
                    const mailSent = await transporter.sendMail({
                        html: textoEmail,
                        subject: 'Alerta cotação Bitcoin',
                        from: 'alertabitcoincap@outlook.com',
                        to: ['marcos.duarte@aluno.faculdadeimpacta.com.br, raul.corrales@aluno.faculdadeimpacta.com.br, amanda.carolini@aluno.faculdadeimpacta.com.br, bianca.lourenco@aluno.faculdadeimpacta.com.br']
                    });

                    console.log(mailSent);
                }

                run();
            }

            let post = {
                usd_value: parseFloat(priceUsd).toFixed(2),
                brl_rate: parseFloat(brl_rate).toFixed(2),
                brl_value: parseFloat(brl_value).toFixed(0),
                send_email: send_email
            }
            let sql = 'INSERT INTO Cotacao_Bitcoin SET ?'

            connection.query(sql, post, function (err, rows) {
                if (rows.affectedRows) {
                    connection.query("SELECT * FROM Cotacao_Bitcoin WHERE id='" + rows.insertId
                        + "' LIMIT 1", function (err, rows) {
                            if (!err && rows.length > 0) {
                                res.json(rows);
                            } else {
                                res.json([]);
                            }
                        });
                }
            });
        });
    });
});

// Excluir Cotacao_Bitcoin
router.delete('/:id', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var id = req.params.id;
        connection.query("DELETE FROM Cotacao_Bitcoin WHERE id='" + id +
            "'", function (err, rows) {
                if (!err) {
                    res.json({
                        "Excluído": true
                    });
                } else {
                    res.json([]);
                }
            });
    });
});

// Modificar Cotacao_Bitcoin
router.put('/:id', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var dados = req.body;
        var id = req.params.id;
        var nome = dados.nome;
        var quant = dados.quant;

        connection.query(
            "UPDATE Cotacao_Bitcoin SET nome='" + nome +
            "', quant='" + quant +
            "'WHERE id='" + id +
            "'", function (err, rows) {

                if (rows.affectedRows) {
                    connection.query("SELECT * FROM Cotacao_Bitcoin WHERE id='" + id
                        + "' LIMIT 1", function (err, rows) {
                            if (!err && rows.length > 0) {
                                res.json(rows[0]);
                            } else {
                                res.json([]);
                            }
                        });
                }
            });
    });
});

module.exports = router;