const elo = document.querySelector('#elo')
const championclass = document.querySelector('#champion-class')
const routes = document.querySelector('#routes')

function championGenerator() {
  let activeOverlayModal = document
    .querySelector('.modal-overlay')
    .classList.add('active')
  let activeContentModal = document
    .querySelector('#content-modal')
    .classList.add('content')
  /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> select conditions */
  // ----- ferro ------ ferro ----- ferro ------ ferro ----- ferro ------ ferro ----- ferro ------ ferro
  if (
    //--------------------------------------------------- 01. ferro + atirador + top
    elo.value === 'ferro' &&
    championclass.value === 'atirador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Quinn'
    document.querySelector('#modal-paragraph').innerHTML = 'As Asas de Demacia'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Quinn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. ferro + atirador + mid
    elo.value === 'ferro' &&
    championclass.value === 'atirador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Corki'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Bombardeiro Ousado'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Corki_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ferro + atirador + jungle
    elo.value === 'ferro' &&
    championclass.value === 'atirador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Graves'
    document.querySelector('#modal-paragraph').innerHTML = 'O Foragido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Graves_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ferro + atirador + bot
    elo.value === 'ferro' &&
    championclass.value === 'atirador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Miss Fortune'
    document.querySelector('#modal-paragraph').innerHTML =
      'A Caçadora de Recompensas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/MissFortune_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }
  if (
    //--------------------------------------------------- 01. ferro + assassino + top
    elo.value === 'ferro' &&
    championclass.value === 'assassino' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yone'
    document.querySelector('#modal-paragraph').innerHTML = 'O Inesquecido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yone_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ferro + assassino + mid
    elo.value === 'ferro' &&
    championclass.value === 'assassino' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yone'
    document.querySelector('#modal-paragraph').innerHTML = 'O Inesquecido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yone_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ferro + assassino + jungle
    elo.value === 'ferro' &&
    championclass.value === 'assassino' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = "Kha'Zix"
    document.querySelector('#modal-paragraph').innerHTML = 'O Ceifador do Vazio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Khazix_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center top'
  } else if (
    //--------------------------------------------------- 04. ferro + assassino + bot
    elo.value === 'ferro' &&
    championclass.value === 'assassino' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Pyke'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Estripador das Águas Sangrentas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Pyke_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ferro + lutador + top
    elo.value === 'ferro' &&
    championclass.value === 'lutador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Camille'
    document.querySelector('#modal-paragraph').innerHTML = 'A Sombra de Aço'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Camille_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 02. ferro + lutador + mid
    elo.value === 'ferro' &&
    championclass.value === 'lutador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Irelia'
    document.querySelector('#modal-paragraph').innerHTML =
      'Dançarina das Lâminas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Irelia_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ferro + lutador + jungle
    elo.value === 'ferro' &&
    championclass.value === 'lutador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Trundle'
    document.querySelector('#modal-paragraph').innerHTML = 'O Rei dos Trolls'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Trundle_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center top'
  } else if (
    //--------------------------------------------------- 04. ferro + lutador + bot
    elo.value === 'ferro' &&
    championclass.value === 'lutador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yasuo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Imperdoável'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yasuo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ferro + mago + top
    elo.value === 'ferro' &&
    championclass.value === 'mago' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Grande General Noxiano'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ferro + mago + mid
    elo.value === 'ferro' &&
    championclass.value === 'mago' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Grande General Noxiano'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ferro + mago + jungle
    elo.value === 'ferro' &&
    championclass.value === 'mago' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Lillia'
    document.querySelector('#modal-paragraph').innerHTML = 'O Florir Receoso'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Lillia_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top center'
  } else if (
    //--------------------------------------------------- 04. ferro + mago + bot
    elo.value === 'ferro' &&
    championclass.value === 'mago' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Zyra'
    document.querySelector('#modal-paragraph').innerHTML =
      'A Ascensão dos Espinhos'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Zyra_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ferro + suporte + top
    elo.value === 'ferro' &&
    championclass.value === 'suporte' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Tahm Kench'
    document.querySelector('#modal-paragraph').innerHTML = 'O Rei do Rio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/TahmKench_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. ferro + suporte + mid
    elo.value === 'ferro' &&
    championclass.value === 'suporte' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Lulu'
    document.querySelector('#modal-paragraph').innerHTML = 'A Fada Feiticeira'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Lulu_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ferro + suporte + jungle
    elo.value === 'ferro' &&
    championclass.value === 'suporte' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Ivern'
    document.querySelector('#modal-paragraph').innerHTML = 'O Pai do Verde'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Ivern_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ferro + suporte + bot
    elo.value === 'ferro' &&
    championclass.value === 'suporte' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Rakan'
    document.querySelector('#modal-paragraph').innerHTML = 'O Charmoso'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Rakan_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ferro + tanque + top
    elo.value === 'ferro' &&
    championclass.value === 'tanque' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Maokai'
    document.querySelector('#modal-paragraph').innerHTML = 'O Ente Sinistro'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Maokai_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. ferro + tanque + mid
    elo.value === 'ferro' &&
    championclass.value === 'tanque' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Galio'
    document.querySelector('#modal-paragraph').innerHTML = 'O Colosso'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Galio_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center top'
  } else if (
    //--------------------------------------------------- 03. ferro + tanque + jungle
    elo.value === 'ferro' &&
    championclass.value === 'tanque' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Rammus'
    document.querySelector('#modal-paragraph').innerHTML = 'O Tatu Blindado'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Rammus_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 04. ferro + tanque + bot
    elo.value === 'ferro' &&
    championclass.value === 'tanque' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Leona'
    document.querySelector('#modal-paragraph').innerHTML = 'A Alvorada Radiante'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Leona_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else {
    //
  }
  // ----- bronze ------ bronze ----- bronze ------ bronze ----- bronze ------ bronze ----- bronze ------ bronze
  if (
    //--------------------------------------------------- 01. bronze + atirador + top
    elo.value === 'bronze' &&
    championclass.value === 'atirador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Quinn'
    document.querySelector('#modal-paragraph').innerHTML = 'As Asas de Demacia'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Quinn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. bronze + atirador + mid
    elo.value === 'bronze' &&
    championclass.value === 'atirador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Teemo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Explorador Veloz'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Teemo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 03. bronze + atirador + jungle
    elo.value === 'bronze' &&
    championclass.value === 'atirador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Graves'
    document.querySelector('#modal-paragraph').innerHTML = 'O Foragido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Graves_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. bronze + atirador + bot
    elo.value === 'bronze' &&
    championclass.value === 'atirador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Miss Fortune'
    document.querySelector('#modal-paragraph').innerHTML =
      'A Caçadora de Recompensas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/MissFortune_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. bronze + assassino + top
    elo.value === 'bronze' &&
    championclass.value === 'assassino' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yone'
    document.querySelector('#modal-paragraph').innerHTML = 'O Inesquecido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yone_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. bronze + assassino + mid
    elo.value === 'bronze' &&
    championclass.value === 'assassino' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yone'
    document.querySelector('#modal-paragraph').innerHTML = 'O Inesquecido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yone_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. bronze + assassino + jungle
    elo.value === 'bronze' &&
    championclass.value === 'assassino' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Master Yi'
    document.querySelector('#modal-paragraph').innerHTML = 'O Espadachim Wuju'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/MasterYi_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 04. bronze + assassino + bot
    elo.value === 'bronze' &&
    championclass.value === 'assassino' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Pyke'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Estripador das Águas Sangrentas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Pyke_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. bronze + lutador + top
    elo.value === 'bronze' &&
    championclass.value === 'lutador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yorick'
    document.querySelector('#modal-paragraph').innerHTML = 'O Pastor de Almas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yorick_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. bronze + lutador + mid
    elo.value === 'bronze' &&
    championclass.value === 'lutador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yasuo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Imperdoável'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yasuo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else if (
    //--------------------------------------------------- 03. bronze + lutador + jungle
    elo.value === 'bronze' &&
    championclass.value === 'lutador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Warwick'
    document.querySelector('#modal-paragraph').innerHTML =
      'A Ira Desimpedida de Zaum'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Warwick_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. bronze + lutador + bot
    elo.value === 'bronze' &&
    championclass.value === 'lutador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yasuo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Imperdoável'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yasuo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. bronze + mago + top
    elo.value === 'bronze' &&
    championclass.value === 'mago' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Malzahar'
    document.querySelector('#modal-paragraph').innerHTML = 'O Profeta do Vazio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Malzahar_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'right top'
  } else if (
    //--------------------------------------------------- 02. bronze + mago + mid
    elo.value === 'bronze' &&
    championclass.value === 'mago' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Nunu 14'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Nunu_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. bronze + mago + jungle
    elo.value === 'bronze' &&
    championclass.value === 'mago' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Lillia'
    document.querySelector('#modal-paragraph').innerHTML = 'O Florir Receoso'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Lillia_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top center'
  } else if (
    //--------------------------------------------------- 04. bronze + mago + bot
    elo.value === 'bronze' &&
    championclass.value === 'mago' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Zyra'
    document.querySelector('#modal-paragraph').innerHTML =
      'A Ascensão dos Espinhos'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Zyra_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. bronze + suporte + top
    elo.value === 'bronze' &&
    championclass.value === 'suporte' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Tahm Kench'
    document.querySelector('#modal-paragraph').innerHTML = 'O Rei do Rio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/TahmKench_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. bronze + suporte + mid
    elo.value === 'bronze' &&
    championclass.value === 'suporte' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Lux'
    document.querySelector('#modal-paragraph').innerHTML = 'A Dama da Luz'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Lux_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 03. bronze + suporte + jungle
    elo.value === 'bronze' &&
    championclass.value === 'suporte' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Ivern'
    document.querySelector('#modal-paragraph').innerHTML = 'O Pai do Verde'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Ivern_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. bronze + suporte + bot
    elo.value === 'bronze' &&
    championclass.value === 'suporte' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Taric'
    document.querySelector('#modal-paragraph').innerHTML = 'O Escudo de Valoran'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Taric_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. bronze + tanque + top
    elo.value === 'bronze' &&
    championclass.value === 'tanque' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Sion'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Colosso Morto-vivo'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Sion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. bronze + tanque + mid
    elo.value === 'bronze' &&
    championclass.value === 'tanque' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Malphite'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Fragmento do Monolito'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Malphite_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else if (
    //--------------------------------------------------- 03. bronze + tanque + jungle
    elo.value === 'bronze' &&
    championclass.value === 'tanque' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Rammus'
    document.querySelector('#modal-paragraph').innerHTML = 'O Tatu Blindado'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Rammus_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 04. bronze + tanque + bot
    elo.value === 'bronze' &&
    championclass.value === 'tanque' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Rell'
    document.querySelector('#modal-paragraph').innerHTML = 'A Dama de Ferro'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Rell_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else {
    //
  }
  // ----- prata ------ prata ----- prata ------ prata ----- prata ------ prata ----- prata ------ prata
  if (
    //--------------------------------------------------- 01. prata + atirador + top
    elo.value === 'prata' &&
    championclass.value === 'atirador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Teemo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Explorador Veloz'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Teemo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 02. prata + atirador + mid
    elo.value === 'prata' &&
    championclass.value === 'atirador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Teemo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Explorador Veloz'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Teemo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 03. prata + atirador + jungle
    elo.value === 'prata' &&
    championclass.value === 'atirador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Graves'
    document.querySelector('#modal-paragraph').innerHTML = 'O foragido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Graves_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. prata + atirador + bot
    elo.value === 'prata' &&
    championclass.value === 'atirador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Vayne'
    document.querySelector('#modal-paragraph').innerHTML = 'A Caçadora Noturna'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Vayne_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top center'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. prata + assassino + top
    elo.value === 'prata' &&
    championclass.value === 'assassino' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yone'
    document.querySelector('#modal-paragraph').innerHTML = 'O Inesquecido'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yone_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. prata + assassino + mid
    elo.value === 'prata' &&
    championclass.value === 'assassino' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kassadin'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Andarilho do Vazio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kassadin_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top center'
  } else if (
    //--------------------------------------------------- 03. prata + assassino + jungle
    elo.value === 'prata' &&
    championclass.value === 'assassino' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Master Yi'
    document.querySelector('#modal-paragraph').innerHTML = 'O Espadachim Wuju'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/MasterYi_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else if (
    //--------------------------------------------------- 04. prata + assassino + bot
    elo.value === 'prata' &&
    championclass.value === 'assassino' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Pyke'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Estripador das Águas Sangrentas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Pyke_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. prata + lutador + top
    elo.value === 'prata' &&
    championclass.value === 'lutador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yorick'
    document.querySelector('#modal-paragraph').innerHTML = 'O Pastor de Almas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yorick_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. prata + lutador + mid
    elo.value === 'prata' &&
    championclass.value === 'lutador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yasuo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Imperdoável'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yasuo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else if (
    //--------------------------------------------------- 03. prata + lutador + jungle
    elo.value === 'prata' &&
    championclass.value === 'lutador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Warwick'
    document.querySelector('#modal-paragraph').innerHTML =
      'A Ira Desimpedida de Zaum'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Warwick_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. prata + lutador + bot
    elo.value === 'prata' &&
    championclass.value === 'lutador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Yasuo'
    document.querySelector('#modal-paragraph').innerHTML = 'O Imperdoável'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Yasuo_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. prata + mago + top
    elo.value === 'prata' &&
    championclass.value === 'mago' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Grande General Noxiano'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. prata + mago + mid
    elo.value === 'prata' &&
    championclass.value === 'mago' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Malzahar'
    document.querySelector('#modal-paragraph').innerHTML = 'O Profeta do Vazio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Malzahar_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. prata + mago + jungle
    elo.value === 'prata' &&
    championclass.value === 'mago' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Karthus'
    document.querySelector('#modal-paragraph').innerHTML = 'A Voz Mortal'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Karthus_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top center'
  } else if (
    //--------------------------------------------------- 04. prata + mago + bot
    elo.value === 'prata' &&
    championclass.value === 'mago' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Jhin 16'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Jhin_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. prata + suporte + top
    elo.value === 'prata' &&
    championclass.value === 'suporte' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Tahm Kench'
    document.querySelector('#modal-paragraph').innerHTML = 'O Rei do Rio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/TahmKench_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. prata + suporte + mid
    elo.value === 'prata' &&
    championclass.value === 'suporte' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Lux'
    document.querySelector('#modal-paragraph').innerHTML = 'A Dama da Luz'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Lux_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. prata + suporte + jungle
    elo.value === 'prata' &&
    championclass.value === 'suporte' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Ivern'
    document.querySelector('#modal-paragraph').innerHTML = 'O Pai do Verde'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Ivern_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. prata + suporte + bot
    elo.value === 'prata' &&
    championclass.value === 'suporte' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Sona'
    document.querySelector('#modal-paragraph').innerHTML = 'A Mestra Das Cordas'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Sona_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. prata + tanque + top
    elo.value === 'prata' &&
    championclass.value === 'tanque' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Sion'
    document.querySelector('#modal-paragraph').innerHTML =
      'O Colosso Morto-vivo'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Sion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. prata + tanque + mid
    elo.value === 'prata' &&
    championclass.value === 'tanque' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = "Cho'Gath"
    document.querySelector('#modal-paragraph').innerHTML = 'O Terror do Vazio'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Chogath_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. prata + tanque + jungle
    elo.value === 'prata' &&
    championclass.value === 'tanque' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Amumu'
    document.querySelector('#modal-paragraph').innerHTML = 'A Múmia Triste'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Amumu_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. prata + tanque + bot
    elo.value === 'prata' &&
    championclass.value === 'tanque' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Taric'
    document.querySelector('#modal-paragraph').innerHTML = 'O Escudo de Valoran'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Taric_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top right'
  } else {
    //
  }
  // ----- ouro ------ ouro ----- ouro ------ ouro ----- ouro ------ ouro ----- (line 949 to 1259)
  if (
    //--------------------------------------------------- 01. ouro + atirador + top
    elo.value === 'ouro' &&
    championclass.value === 'atirador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 1'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. ouro + atirador + mid
    elo.value === 'ouro' &&
    championclass.value === 'atirador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 2'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 03. ouro + atirador + jungle
    elo.value === 'ouro' &&
    championclass.value === 'atirador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 3'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ouro + atirador + bot
    elo.value === 'ouro' &&
    championclass.value === 'atirador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 4'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ouro + assassino + top
    elo.value === 'ouro' &&
    championclass.value === 'assassino' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 5'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ouro + assassino + mid
    elo.value === 'ouro' &&
    championclass.value === 'assassino' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 6'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ouro + assassino + jungle
    elo.value === 'ouro' &&
    championclass.value === 'assassino' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 7'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ouro + assassino + bot
    elo.value === 'ouro' &&
    championclass.value === 'assassino' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 8'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ouro + lutador + top
    elo.value === 'ouro' &&
    championclass.value === 'lutador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 9'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ouro + lutador + mid
    elo.value === 'ouro' &&
    championclass.value === 'lutador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 10'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ouro + lutador + jungle
    elo.value === 'ouro' &&
    championclass.value === 'lutador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 11'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ouro + lutador + bot
    elo.value === 'ouro' &&
    championclass.value === 'lutador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 12'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ouro + mago + top
    elo.value === 'ouro' &&
    championclass.value === 'mago' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 13'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ouro + mago + mid
    elo.value === 'ouro' &&
    championclass.value === 'mago' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 14'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ouro + mago + jungle
    elo.value === 'ouro' &&
    championclass.value === 'mago' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 15'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ouro + mago + bot
    elo.value === 'ouro' &&
    championclass.value === 'mago' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 16'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ouro + suporte + top
    elo.value === 'ouro' &&
    championclass.value === 'suporte' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 17'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ouro + suporte + mid
    elo.value === 'ouro' &&
    championclass.value === 'suporte' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 18'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ouro + suporte + jungle
    elo.value === 'ouro' &&
    championclass.value === 'suporte' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 19'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ouro + suporte + bot
    elo.value === 'ouro' &&
    championclass.value === 'suporte' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 20'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. ouro + tanque + top
    elo.value === 'ouro' &&
    championclass.value === 'tanque' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 21'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. ouro + tanque + mid
    elo.value === 'ouro' &&
    championclass.value === 'tanque' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 22'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. ouro + tanque + jungle
    elo.value === 'ouro' &&
    championclass.value === 'tanque' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 23'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. ouro + tanque + bot
    elo.value === 'ouro' &&
    championclass.value === 'tanque' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Kayn 24'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Kayn_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }
  // ----- platina ------ platina ----- platina ------ platina ----- platina ------ (line 1260 to 1571)
  if (
    //--------------------------------------------------- 01. platina + atirador + top
    elo.value === 'platina' &&
    championclass.value === 'atirador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 1'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. platina + atirador + mid
    elo.value === 'platina' &&
    championclass.value === 'atirador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 2'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 03. platina + atirador + jungle
    elo.value === 'platina' &&
    championclass.value === 'atirador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 3'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. platina + atirador + bot
    elo.value === 'platina' &&
    championclass.value === 'atirador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 4'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. platina + assassino + top
    elo.value === 'platina' &&
    championclass.value === 'assassino' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 5'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. platina + assassino + mid
    elo.value === 'platina' &&
    championclass.value === 'assassino' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 6'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. platina + assassino + jungle
    elo.value === 'platina' &&
    championclass.value === 'assassino' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 7'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. platina + assassino + bot
    elo.value === 'platina' &&
    championclass.value === 'assassino' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 8'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. platina + lutador + top
    elo.value === 'platina' &&
    championclass.value === 'lutador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 9'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. platina + lutador + mid
    elo.value === 'platina' &&
    championclass.value === 'lutador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 10'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. platina + lutador + jungle
    elo.value === 'platina' &&
    championclass.value === 'lutador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 11'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. platina + lutador + bot
    elo.value === 'platina' &&
    championclass.value === 'lutador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 12'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. platina + mago + top
    elo.value === 'platina' &&
    championclass.value === 'mago' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 13'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. platina + mago + mid
    elo.value === 'platina' &&
    championclass.value === 'mago' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 14'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. platina + mago + jungle
    elo.value === 'platina' &&
    championclass.value === 'mago' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 15'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. platina + mago + bot
    elo.value === 'platina' &&
    championclass.value === 'mago' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 16'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. platina + suporte + top
    elo.value === 'platina' &&
    championclass.value === 'suporte' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 17'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. platina + suporte + mid
    elo.value === 'platina' &&
    championclass.value === 'suporte' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 18'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. platina + suporte + jungle
    elo.value === 'platina' &&
    championclass.value === 'suporte' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 19'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. platina + suporte + bot
    elo.value === 'platina' &&
    championclass.value === 'suporte' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 20'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. platina + tanque + top
    elo.value === 'platina' &&
    championclass.value === 'tanque' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 21'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. platina + tanque + mid
    elo.value === 'platina' &&
    championclass.value === 'tanque' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 22'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. platina + tanque + jungle
    elo.value === 'platina' &&
    championclass.value === 'tanque' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 23'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. platina + tanque + bot
    elo.value === 'platina' &&
    championclass.value === 'tanque' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Aurelion 24'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Aurelion_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }
  // ----- diamante ------ diamante ----- diamante ------ diamante ----- diamante ------ (line 1572 to 1571)
  if (
    //--------------------------------------------------- 01. diamante + atirador + top
    elo.value === 'diamante' &&
    championclass.value === 'atirador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 1'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 02. diamante + atirador + mid
    elo.value === 'diamante' &&
    championclass.value === 'atirador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 2'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'center'
  } else if (
    //--------------------------------------------------- 03. diamante + atirador + jungle
    elo.value === 'diamante' &&
    championclass.value === 'atirador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 3'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. diamante + atirador + bot
    elo.value === 'diamante' &&
    championclass.value === 'atirador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 4'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. diamante + assassino + top
    elo.value === 'diamante' &&
    championclass.value === 'assassino' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 5'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. diamante + assassino + mid
    elo.value === 'diamante' &&
    championclass.value === 'assassino' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 6'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. diamante + assassino + jungle
    elo.value === 'diamante' &&
    championclass.value === 'assassino' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 7'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. diamante + assassino + bot
    elo.value === 'diamante' &&
    championclass.value === 'assassino' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 8'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. diamante + lutador + top
    elo.value === 'diamante' &&
    championclass.value === 'lutador' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 9'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. diamante + lutador + mid
    elo.value === 'diamante' &&
    championclass.value === 'lutador' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 10'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. diamante + lutador + jungle
    elo.value === 'diamante' &&
    championclass.value === 'lutador' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 11'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. diamante + lutador + bot
    elo.value === 'diamante' &&
    championclass.value === 'lutador' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 12'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. diamante + mago + top
    elo.value === 'diamante' &&
    championclass.value === 'mago' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 13'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. diamante + mago + mid
    elo.value === 'diamante' &&
    championclass.value === 'mago' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 14'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. diamante + mago + jungle
    elo.value === 'diamante' &&
    championclass.value === 'mago' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 15'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. diamante + mago + bot
    elo.value === 'diamante' &&
    championclass.value === 'mago' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 16'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. diamante + suporte + top
    elo.value === 'diamante' &&
    championclass.value === 'suporte' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 17'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. diamante + suporte + mid
    elo.value === 'diamante' &&
    championclass.value === 'suporte' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 18'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. diamante + suporte + jungle
    elo.value === 'diamante' &&
    championclass.value === 'suporte' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 19'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. diamante + suporte + bot
    elo.value === 'diamante' &&
    championclass.value === 'suporte' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 20'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }

  if (
    //--------------------------------------------------- 01. diamante + tanque + top
    elo.value === 'diamante' &&
    championclass.value === 'tanque' &&
    routes.value === 'top'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 21'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 02. diamante + tanque + mid
    elo.value === 'diamante' &&
    championclass.value === 'tanque' &&
    routes.value === 'mid'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 22'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 03. diamante + tanque + jungle
    elo.value === 'diamante' &&
    championclass.value === 'tanque' &&
    routes.value === 'jungle'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 23'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else if (
    //--------------------------------------------------- 04. diamante + tanque + bot
    elo.value === 'diamante' &&
    championclass.value === 'tanque' &&
    routes.value === 'bot'
  ) {
    document.querySelector('#modal-title').innerHTML = 'Swain 24'
    document.querySelector('#modal-paragraph').innerHTML =
      'Lorem Ipsum is simple dummy text'
    document.querySelector('.modal').style.background =
      'url(src/images/champions/Swain_0.jpg)'
    document.querySelector('.modal').style.backgroundPosition = 'top'
  } else {
    //
  }
}

function modalClosed() {
  document.querySelector('.modal-overlay').classList.remove('active')
}
