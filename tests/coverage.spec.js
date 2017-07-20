function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

const modules = requireAll(require.context('../src', true, /\.(js|ts|tsx|jsx)$/))