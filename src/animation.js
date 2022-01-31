export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        y: 200,
        transition: {
            duration: 0.3
        }
    }
};

export const titleAnim = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};

export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
};

export const photoAnim = {
    hidden: {
        scale: 1.5,
        opacity: 0
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.75
        }
    }
};