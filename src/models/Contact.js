/* Criando o models */
import Sequelize, { Model } from 'sequelize';

export default class Contact extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'O campo nome não pode estar vazio'
                    }
                }
            },

            lastname: {
                type: Sequelize.STRING
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: {
                    msg: 'Já existe um contato cadastrado com esse e-mail'
                },

                validate: {
                    isEmail: {
                        msg: 'O e-mail é inválido'
                    }
                }
            },

            tel: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: {
                    msg: 'Já existe um contato cadastrado com esse telefone'
                },

                validate: {
                    len: {
                        args: [8, 8],
                        msg: 'O número do telefone tem que ter 8 caracteres'
                    }
                }
            },

            cell: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: {
                    msg: 'Já existe um contato cadastrado com esse celular'
                },

                validate: {
                    len: {
                        args: [8, 9],
                        msg: 'O número do celular tem que ter 8 ou 9 caracteres'
                    }
                }
            },

            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },

            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        }, {
            sequelize
        });

        return this;
    }
}
