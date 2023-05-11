import Main from "@/pages/1-1Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import Zayavka from "@/pages/1-2Zayavka.vue";
import Uslugi from "@/pages/2Uslugi.vue";
import AboutUs from "@/pages/3AboutUs.vue";
import Gallery from "@/pages/4Gallery.vue";
import Documents from "@/pages/5Documents.vue";
import Contacts from "@/pages/6Contacts.vue";
import News from "@/pages/7News.vue";

const routes = [
    {
        path: '/',
        name: "Main",
        component: Main,
    },
    {
        path: '/Zayavka',
        name: "Zayavka",
        component: Zayavka,
    },
    {
        path: '/Uslugi',
        name: "Uslugi",
        component: Uslugi
    },
    {
        path: '/AboutUs',
        name: "AboutUs",
        component: AboutUs
    },
    {
        path: '/Gallery',
        name: "Gallery",
        component: Gallery
    },
    {
        path: '/Documents',
        name: "Documents",
        component: Documents
    },
    {
        path: '/Contacts',
        name: "Contacts",
        component: Contacts
    },
    {
        path: '/News',
        name: "News",
        component: News
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory(process.env.BASE_URL)
    }
)
export default router;