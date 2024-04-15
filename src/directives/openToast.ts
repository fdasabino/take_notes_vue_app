import { useToast } from "vue-toast-notification";
const $toast = useToast();

export const openToast = (message: string, type: string) => {
    $toast.open({
        position: "bottom",
        message: message,
        type: type,
        queue: true,
        duration: 3000,
        pauseOnHover: true,
    });
};
