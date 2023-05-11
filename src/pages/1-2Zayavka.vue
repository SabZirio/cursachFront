<template>
    <!--Контент-->
    <main>
        <div class="d-flex justify-content-center align-items-center flex-column ">

            <p class="pt-4"
                style="font-weight: 900; font-size: 40px; line-height: 47px; display: flex; align-items: center; text-align: center; color: #000000;">
                Оставить заявку
            </p>
            <div class=" container mx-auto w-75 mt-4" style="background: rgba(242, 106, 27, 0.9);
                border-radius: 30px;">


                <!--формы-->
                <div class="mt-5 ">

                    <input class="form-control form-control mx-auto mt-4 w-75" type="text" placeholder="Ваше ФИО"
                        aria-label=".form-control-sm">
                    <input class="form-control form-control mx-auto mt-4 w-75" type="text" placeholder="Номер телефона"
                        aria-label=".form-control-sm ">
                    <input class="form-control form-control mx-auto mt-4 w-75" type="text" placeholder="Электронная почта"
                        aria-label=".form-control-sm ">
                    <select class="form-select form-select mx-auto mt-4 w-75" aria-label="Small select">
                        <option selected="">Выберите услугу</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

                    <!--кнопка отправки-->
                    <div class="pt-4 pb-4 d-flex justify-content-center">
                        <button type="button" class="btn btn-primary"
                            style="font-weight: 800; font-size: 30px; line-height: 35px; display: flex; align-items: center; text-align: center; color: #FFFFFF; background: #0D0D0D; border-radius: 6px;">ОТПРАВИТЬ</button>
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

<style lang="scss" scoped></style>