export default {
  data: {
    user: {
      name: "Felipe",
      position: 3,
      valueTotal: 20
    },
    temporada: [
        {
          name: 'Temporada 1',
          value: 20,
          totalValue: 20,
          dias: {
            valueTotal: 20,
            treino: {
              locked: false,
              completo: true,
              value: 20
            },
            desejum: {
              locked: false,
              completo: false,
              value: 10
            },
            almoco: {
              locked: true,
              completo: false,
              value: 10
            },
            jantar: {
              locked: true,
              completo: flase,
              value: 10
            }
          },
          {
            value: 20,
            totalValue: 20,
            dias: {
              valueTotal: 20,
              treino: {
                locked: false,
                completo: true,
                value: 20
              },
              desejum: {
                locked: false,
                completo: false,
                value: 10
              },
              almoco: {
                locked: true,
                completo: false,
                value: 10
              },
              jantar: {
                locked: true,
                completo: flase,
                value: 10
              }
            }
          }
        }
      ]
  }
};
