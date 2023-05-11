<template>
  <!--Контент-->
  <main>
    <div class="">
      <!--кусок с машинкой и фоном-->
      <div class="container-fluid mx-auto p-0">
        <div class="container-fluid p-0 index_block1">

          <div class="row d-flex justify-content-center my-auto pb-1 pt-5 mx-3">
            <!--пустая колонка для красоты 1-->
            <div class="col-xl col-sm-0"></div>
            <!--крутой текст-->
            <div class="col-xl-5 col-sm-12 pt-5 mt-5">
              <p class="px-4 py-4 index_block_text">
                ОХРАННОЕ АГЕНСТВО "ИРКУТ" - ЭТО ВСЕ ВИДЫ ОХРАННЫХ УСЛУГ И ОБЕСПЕЧЕНИЯ БЕЗОПАСНОСТИ.
              </p>
            </div>
            <!--пустая колонка для красоты 1-->
            <div class="col-xl-1 col-sm-0 mx-5">

            </div>
            <!--заявочку оставляем тут-->
            <div class="col-xl-4 col-sm-12 pt-3 mx-2">
              <div class="container mx-auto" style="background: rgba(242, 106, 27, 0.9);
            border-radius: 30px;">

                <p class="pt-4"
                  style="font-family: 'Roboto'; font-style: normal; font-weight: 800; font-size: 30px; line-height: 35px; text-align: center;">
                  ОСТАВЬТЕ ЗАЯВКУ
                </p>
                <!--формы-->
                <input class="form-control form-control-sm mx-auto mt-3 w-75" type="text" placeholder="Ваше ФИО"
                  aria-label=".form-control-sm">
                <input class="form-control form-control-sm mx-auto mt-3 w-75" type="text" placeholder="Номер телефона"
                  aria-label=".form-control-sm ">
                <input class="form-control form-control-sm mx-auto mt-3 w-75" type="text" placeholder="Электронная почта"
                  aria-label=".form-control-sm ">
                <select class="form-select form-select-sm mx-auto mt-3 w-75" aria-label="Small select">
                  <option selected="">Выберите услугу</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <!--кнопка отправки-->
                <div class="pt-4 pb-4 d-flex justify-content-center">
                  <button type="button" class="btn btn-primary"
                    style="font-weight: 800; font-size: 20px; line-height: 23px; display: flex; align-items: center; text-align: center; color: #FFFFFF; background: #0D0D0D;">Отправить</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-xl-3 col-sm-0"></div>
            <div class="col-xl-6 col-sm-12">
              <div class="d-flex mx-auto justify-content-center">
                <img src="../assets/1-1Glavnaya/bibika.png" alt="" class="img-fluid" style="z-index: 1;">
              </div>

            </div>
            <div class="col-xl-3 col-sm-0"></div>
          </div>

        </div>
      </div>

      <!--кусок с шариками-->
      <div class="container-fluid mx-auto pt-5 p-0 mb-5 pb-5">

        <p class="mt-5 pt-5 pb-4 justify-content-center"
          style="font-weight: 900; font-size: 40px; line-height: 47px; display: flex; align-items: center; text-align: center; color: #000000;">
          НАША ДЕЯТЕЛЬНОСТЬ
        </p>

        <div class="row mx-auto align-items-start"
          style="font-weight: 200; font-size: 30px;line-height: 35px;display: flex;align-items: center;text-align: center;color: #000000;">

          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="d-flex flex-column">
              <div>
                <a href="#">
                  <img src="../assets/1-1Glavnaya/пульт.png" alt="" />
                </a>
              </div>

              <div class="mt-3">
                <b>Пультовая охрана</b>
              </div>
              <div class="mt-3">
                <p>Комплекс мер по защите объектов недвижимости от проникновения, нападения, пожара и т.д.</p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="d-flex flex-column">
              <div>
                <a href="#">
                  <img src="../assets/1-1Glavnaya/охр.png" alt="">
                </a>
              </div>

              <div class="mt-3">
                <b>Физическая охрана</b>
              </div>
              <div class="mt-3">
                <p>Меры безопасности по сохранности материального имущества, защиты жизни и здоровья его персонала.</p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="d-flex flex-column">
              <div>
                <a href="#">
                  <img src="../assets/1-1Glavnaya/сопровож.png">
                </a>
              </div>

              <div class="mt-3">
                <b>Сопровождение грузов</b>
              </div>
              <div class="mt-3">
                <p>Обеспечение сохранности грузов при перевозке.</p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6 col-sm-12">
            <div class="d-flex flex-column">
              <div>
                <a href="#">
                  <img src="../assets/1-1Glavnaya/консалт.png">
                </a>
              </div>
            </div>
            <div class="mt-3">
              <b>Консультирование</b>
            </div>
            <div class="mt-3">
              <p>Бесплатное консультирование по вопросам безопасности.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>

<script>
export default {

}
</script>

<style scoped></style>