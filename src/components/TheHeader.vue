<template>
    <!--Шапка главная-->
    <header>
        <div class="container-fluid mx-auto p-0">
            <!--Кусок шапки декоративный-->
            <div class="container-fluid p-0 shapka">
                <div class="row">
                    <div class="px-5 pt-2  col-2 ">
                        <!--ссылка именно на лого которое иконка вкладки в паблике, а не в папке TheHeader-->
                        <img src="../assets/TheHeader/logo.svg" class="img">
                    </div>
                </div>
                <div class="row">
                    <div class="headerText1 col-2 mt-3 mx-4">
                        Гарантия безопасности Вас и Вашего имущества!
                    </div>
                </div>
                <div class="row ">
                    <div class="headerText2 col-1 mx-4 mb-2">
                        Декабрьских событий, 46
                    </div>
                </div>

            </div>
            <!--Кусок шапки функциональный: навигация-->
            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-xl justify-content-center py-4 navbar-dark p-0">
                    <!--кнопка сворачивания для мобилок-->
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!--сами разделы сайта-->
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="navbar-nav justify-content-center  mx-auto ">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link forhover p-1">Главная</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Uslugi" class="nav-link forhover p-1">Услуги</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/AboutUs" class="nav-link forhover p-1">О нас</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Gallery" class="nav-link forhover p-1">Галерея</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Documents" class="nav-link forhover p-1">Документы</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/Contacts" class="nav-link forhover p-1">Контакты</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/News" class="nav-link forhover p-1">Новости</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </div>
    </header>
</template>

<script></script>
<style></style>