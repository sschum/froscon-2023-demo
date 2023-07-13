MyVueApp.component('card', {
    props: ['cssClass'],
    template: `
<div class="card">
    <div :class="cssClass">
        <div class="card-body">
            <h5 class="card-title">
                <slot></slot>
            </h5>
        </div>
    </div>
</div>
    `
})