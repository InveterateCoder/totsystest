if (!window.localStorage.getItem('chat_db')) {
  console.log('nooo')
  window.localStorage.setItem('chat_db', JSON.stringify([
    {
      id: 1, type: 'duty', sender: {
        id: 1, name: 'Артур',
      },
      datetime: '2020-08-05T13:33:20.232Z',
      text: 'Здравствуйте! Меня заинтересовало ваше предложение! Есть вопросы которые нам следовало бы обсудить.',
    },
    {
      id: 2, type: 'duty', sender: {
        id: 4, name: 'Е. Сотникова'
      },
      datetime: '2020-08-05T13:39:54.360Z',
      text: 'Улетай на крыльях ветра Ты в край родной, родная песня наша Туда, где мы тебя свободно пели Где было так привольно нам с тобою',
    },
    {
      id: 3, type: 'fun', sender: {
        id: 3, name: 'CC Catch'
      },
      datetime: '2020-08-05T13:44:34.287Z',
      text: 'Cause you are young You will always be so strong Hold on tight to your dreams, hold on You are right, don\'t give up',
    },
    {
      id: 4, type: 'duty', sender: {
        id: 2, name: 'А. С. Пушкин'
      },
      datetime: '2020-08-05T14:12:01.144Z',
      text: 'Я помню чудное мгновенье: Передо мной явилась ты, Как мимолетное виденье, Как гений чистой красоты. В томленьях грусти безнадежной, В тревогах шумной суеты, Звучал мне долго голос нежный И снились милые черты. Шли годы. Бурь порыв мятежный Рассеял прежние мечты, И я забыл твой голос нежный, Твои небесные черты.'
    },
    {
      id: 5, type: 'fun', sender: {
        id: 1, name: 'Артур',
      },
      datetime: '2020-08-05T14:20:26.624Z',
      text: 'Надеюсь вам нравится 🙂'
    }
  ]))
}