<script lang="typescript">
    let foo: string | null = null;

    $: if (foo !== null) {
        // Condition may become valid at runtime
        console.log('String length: ' + foo.length);
    }
</script>
