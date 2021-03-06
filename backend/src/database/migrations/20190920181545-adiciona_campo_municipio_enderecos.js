'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('core_enderecos', 'municipio_id', {
            type: Sequelize.BIGINT,
            references: {
                model: 'core_municipios',
                key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('core_enderecos', 'municipio_id');
    },
};
