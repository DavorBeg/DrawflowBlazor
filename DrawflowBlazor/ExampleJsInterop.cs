using Microsoft.JSInterop;

namespace DrawflowBlazor
{
    public class ExampleJsInterop : IAsyncDisposable
    {
        private readonly Lazy<Task<IJSObjectReference>> moduleTask;

        private readonly Lazy<Task<IJSObjectReference>> events;

        public ExampleJsInterop(IJSRuntime jsRuntime)
        {
            moduleTask = new(() => jsRuntime.InvokeAsync<IJSObjectReference>(
                "import", "./_content/DrawflowBlazor/DrawflowBlazor-bundle.js").AsTask());

        }
        public async ValueTask<string> Prompt(string message)

        {
            var module = await moduleTask.Value;
            
            return await module.InvokeAsync<string>("showPrompt", message);
        }
        public async ValueTask SayHelloToConsole()
        {
            var module = await moduleTask.Value;
            await module.InvokeVoidAsync("bundlePrintTest");
        }
        public async ValueTask DisposeAsync()
        {
            if (moduleTask.IsValueCreated)
            {
                var module = await moduleTask.Value;
                await module.DisposeAsync();
            }
        }
    }
}
