const joi = require('joi');

const financial = joi.object().keys({
  nr_contrato: joi.required(),
  nome_cliente: joi.required(),
  produto: joi.optional(),
  tel_1: joi.required(),
  vlr_divida_1: joi.required(),
  cd_barras_1: joi.required(),
  vcto_1: joi.required(),
  mes_ref_1: joi.required(),
  vcto_2: joi.required(),
  vlr_divida_2: joi.required(),
  cd_barras_2: joi.required(),
  mes_ref_2: joi.required(),
  nr_faturas: joi.required(),
});

module.exports = {
  financial
}

/**
 * Schema Other
 */

// nr_contrato: joi.required(),
// nome_cliente: joi.required(),
// produto: joi.optional(),
// tel_1: joi.required(),
// vlr_divida_1: joi.required(),
// cd_barras_1: joi.required(),
// vcto_1: joi.required(),
// mes_ref_1: joi.required(),
// vcto_2: joi.required(),
// vlr_divida_2: joi.required(),
// cd_barras_2: joi.required(),
// mes_ref_2: joi.required(),